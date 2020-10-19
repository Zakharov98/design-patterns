class App {
    constructor() {
      if (App.exists) {
        return App.instance 
      }
      App.instance = this
      App.exists = true
      this.id = Math.floor(Math.random() * 1000)
    }
  
    print = () => console.log(`App running with id ${this.id}`)
  }
  
  const app1 = new App()
  app1.print()
  
  const app2 = new App()
  app2.print()
  
  const app3 = new App()
  app3.print()