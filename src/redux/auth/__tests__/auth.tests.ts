import { createStoreForTests } from "../../../utils/createStoreForTests"
import { USERS } from "../../../utils/for-tests/users"

describe("auth tests suite", () => {
  it("as an user, i would like to signin with my google account", async () => {
    const entity = { ...USERS.base }

    const {
      store: { getState, dispatch },
      di,
      actions,
    } = createStoreForTests()

    await di.AuthRepository.register(entity)

    await dispatch<any>(actions.auth.$authenticateWithGoogle())

    let state = getState()

    expect(state.auth.authenticated).toEqual(true)
  })

  it("as an user, i would like to signin with my google account but it don't works", async () => {
    const {
      store: { getState, dispatch },
      di,
      actions,
    } = createStoreForTests()

    await dispatch<any>(actions.auth.$authenticateWithGoogle())

    let state = getState()

    expect(state.auth.authenticated).toEqual(false)
  })

  it("as a loggedin user, i would like to logout and get a fresh state", async () => {
    const entity = { ...USERS.base }

    const {
      store: { getState, dispatch },
      di,
      actions,
    } = createStoreForTests()

    await di.AuthRepository.register(entity)

    await dispatch<any>(actions.auth.$authenticateWithGoogle())

    let state = getState()

    expect(state.auth.authenticated).toEqual(true)

    await dispatch<any>(actions.auth.$logout())

    state = getState()

    expect(state.auth.authenticated).toEqual(false)
    expect(state.auth.user).toEqual(null)
  })

  it("as a loggedin user, i would like to be automatically loggedin when i return in the application", async () => {
    const entity = { ...USERS.base }

    const {
      store: { getState, dispatch },
      di,
      actions,
    } = createStoreForTests()

    const response = await di.AuthRepository.register(entity)

    if (!response.authenticated)
      return expect(response.authenticated).toEqual(true)

    await di.AuthRepository.authenticateWithGoogle()

    let state = getState()

    expect(state.auth.authenticated).toEqual(false)

    await dispatch<any>(actions.auth.$isAuthenticated())

    state = getState()

    expect(state.auth.authenticated).toEqual(true)
    expect(state.auth.user?.id).toEqual(response.user.id)
  })
})
