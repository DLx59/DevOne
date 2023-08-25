export class RouteConstant {
  public static contactRoute = '/contact';
  public static websiteCreation = '/creation-site-internet';

  public static getRoutes() {
    return [this.contactRoute, this.websiteCreation]
  }
}
