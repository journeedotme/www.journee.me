import { TaskEntity, TaskEntityWithoutId } from "../../../entities/TaskEntity"
import { UserEntity } from "../../../entities/UserEntity"
import { createStoreForTests } from "../../../utils/createStoreForTests"
import { USERS } from "../../../utils/for-tests/users"

describe("tasks tests suite", () => {
  it("as a logged out user, i should not be able to get tasks", async () => {
    const { store, actions, di } = createStoreForTests()

    const task: TaskEntityWithoutId = {
      name: "Meditation",
      user: { id: "fake-id" },
      checks: [],
    }

    await di.TasksRepository.create(task)
    await store.dispatch<any>(actions.tasks.$findAll())

    let state = store.getState()

    expect(state.tasks.tasks).toEqual([])
  })

  it("as a logged out user, i should not be able to create task", async () => {
    const { store, actions } = createStoreForTests()

    await store.dispatch<any>(actions.tasks.$create({ name: "Yoga" }))

    let state = store.getState()

    expect(state.tasks.tasks).toEqual([])
  })

  it("as a logged out user, i should not be able to update task", async () => {
    const { store, actions, di } = createStoreForTests()

    const task: TaskEntity = {
      id: "test",
      name: "Cooking",
      checks: [],
      user: { id: "john-doe" },
    }

    await di.TasksRepository.create(task)

    await store.dispatch<any>(
      actions.tasks.$rename({ id: "test", name: "Yoga" })
    )

    let state = store.getState()

    expect(state.tasks.tasks).toEqual([])
  })

  it("as a logged in user, i should be able to get my tasks", async () => {
    const { store, actions, di } = createStoreForTests()

    const { user } = await di.AuthRepository.register({ ...USERS.base })

    const task: TaskEntity = {
      id: "test",
      name: "Cooking",
      checks: [],
      user: { id: user?.id as UserEntity["id"] },
    }

    await di.TasksRepository.create(task)

    await store.dispatch<any>(actions.auth.$authenticateWithGoogle())

    let state = store.getState()

    expect(state.auth.authenticated).toEqual(true)
    expect(state.tasks.tasks).toEqual([])

    await store.dispatch<any>(actions.tasks.$findAll())

    state = store.getState()

    expect(state.tasks.tasks).toEqual([task])
  })

  it("as a logged in user, i should be able to create task", async () => {
    const { store, actions, di } = createStoreForTests()

    await di.AuthRepository.register({ ...USERS.base })

    await store.dispatch<any>(actions.auth.$authenticateWithGoogle())

    let state = store.getState()

    expect(state.auth.authenticated).toEqual(true)
    expect(state.tasks.tasks).toEqual([])

    await store.dispatch<any>(actions.tasks.$create({ name: "Meditation" }))

    state = store.getState()

    expect(state.tasks.tasks).toHaveLength(1)
  })

  it("as a logged in user, i should be able to update task", async () => {
    const { store, actions, di } = createStoreForTests()

    await di.AuthRepository.register({ ...USERS.base })

    await store.dispatch<any>(actions.auth.$authenticateWithGoogle())

    let state = store.getState()

    expect(state.auth.authenticated).toEqual(true)
    expect(state.tasks.tasks).toEqual([])

    await store.dispatch<any>(actions.tasks.$create({ name: "Meditation" }))

    state = store.getState()

    const id = state.tasks.tasks[0].id

    await store.dispatch<any>(actions.tasks.$rename({ id, name: "Yoga" }))

    state = store.getState()

    expect(state.tasks.tasks).toHaveLength(1)
    expect(state.tasks.tasks[0].name).toEqual("Yoga")
  })

  it("as a logged in user, i should be able to remove task", async () => {
    const { store, actions, di } = createStoreForTests()

    await di.AuthRepository.register({ ...USERS.base })

    await store.dispatch<any>(actions.auth.$authenticateWithGoogle())

    let state = store.getState()

    expect(state.auth.authenticated).toEqual(true)
    expect(state.tasks.tasks).toEqual([])

    await store.dispatch<any>(actions.tasks.$create({ name: "Meditation" }))

    state = store.getState()

    const id = state.tasks.tasks[0].id

    await store.dispatch<any>(actions.tasks.$remove({ id }))

    state = store.getState()

    expect(state.tasks.tasks).toHaveLength(0)
  })
})
