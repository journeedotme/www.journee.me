import { navigate } from "gatsby"
import { ILocationService } from "../interfaces/ILocationService"

export class GatsbyLocationService implements ILocationService {
  getLocation(): { pathname: string } {
    return window.location
  }

  getHistory(): { state?: { from?: string } } {
    return window.history
  }

  navigate(to: string, state: {}) {
    navigate(to, { state })
  }
}
