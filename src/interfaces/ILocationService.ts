export interface ILocationService {
  navigate(to: string, state?: any): any
  getLocation(): { pathname: string }
  getHistory(): { state?: { from?: string } }
}
