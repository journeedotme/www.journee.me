import { IAnalyticsService } from "../interfaces/IAnalyticsService"

export class AmplitudeAnalyticsService implements IAnalyticsService {
  send(name: string, data = {}) {
    try {
      //@ts-ignore
      window.amplitude.getInstance().logEvent(name, data)
    } catch (e) {}
  }
  authenticate(params: { id: string; email: string }) {
    try {
      //@ts-ignore
      window.amplitude.getInstance().setUserId(params.id)
    } catch (e) {}
  }
}
