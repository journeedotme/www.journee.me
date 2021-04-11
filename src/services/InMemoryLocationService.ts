import { ILocationService } from "../interfaces/ILocationService"

export class InMemoryLocationService implements ILocationService {
  private history: Array<{ to: string; state: any }> = []

  getLocation(): { pathname: string } {
    const pathname = this.getHistory()?.to || "/"
    return { pathname }
  }

  navigate(to: string, state = {}) {
    this.history.push({ to, state })
  }

  getHistory() {
    return this.history[0]
  }
}
