export class FirebaseUtils {
  mapQuerySnapshot<T>(querySnapshot: any, timestamp?: boolean): Array<T> {
    const data: any[] = []

    querySnapshot.forEach((doc: any) => {
      const element = doc.data()

      data.push(element)
    })

    return data
  }
}
