import { IAnalyticsService } from "../interfaces/IAnalyticsService"

export class InMemoryAnalyticsService implements IAnalyticsService {
  private events: Array<{ name: string; data: any }> = []
  private user: { id: string; email: string } | null = null

  send(name: string, data = {}) {
    this.events.push({ name, data })
  }

  authenticate(params: { id: string; email: string }) {
    this.user = params
  }

  getUser() {
    return { ...this.user }
  }

  getEvents() {
    return [...this.events]
  }
}
