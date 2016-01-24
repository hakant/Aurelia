export class App {

  configureRouter(config, router) {
    this.router = router;

    config.map([{
      route: ["", "list"],
      moduleId: "movies/list",
      title: "List",
      nav: true,
      name: "home"
    }, {
      route: "about",
      moduleId: "about/about",
      title: "About",
      nav: true
    }, {
      name: "details",
      route: "details/:id",
      moduleId: "movies/details"
    }, {
      name: "edit",
      route: "edit/:id",
      moduleId: "movies/edit"
    }, {
      name: "create",
      route: "create",
      moduleId: "movies/edit"
    }]);
  }

}
