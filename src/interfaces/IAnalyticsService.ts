export interface IAnalyticsService {
  send(name: string, data?: any): any
  authenticate(params: { id: string; email: string }): any
}
