class App {
    constructor(name, dev = 'company1') {
      this.name = name
      this.dev = dev
    }
  
    print() {
      console.log(`App ${this.name} created by ${this.dev} belongs ${this.owner ? this.owner : this.dev}`)
    }
  }
  
  const appWithOutOwner = new App('prototype')
  console.log(appWithOutOwner)
  appWithOutOwner.print()
  
  const appWithOwner = Object.create(appWithOutOwner, { owner: { value: 'company2' } })
  console.log(appWithOwner)
  appWithOwner.print()
  
  console.log(appWithOutOwner === appWithOwner.__proto__)
  
  