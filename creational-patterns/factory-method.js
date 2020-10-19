class DeveloperVacancy {
    constructor(name) {
      this.name = name
      this.type = 'developer'
      this.payment = 500
    }
  }
  
  class TesterVacancy {
    constructor(name) {
      this.name = name
      this.type = 'tester'
      this.payment = 450
    }
  }
  
  class DesignerVacancy {
    constructor(name) {
      this.name = name
      this.type = 'designer'
      this.payment = 400
    }
  }
  
  class VacanciesFactory {
    static vacancies = {
      developer: DeveloperVacancy,
      tester: TesterVacancy,
      designer: DesignerVacancy
    }
  
    create(name, vacancy) {
      const Vacancy = VacanciesFactory.vacancies[vacancy]
      const newUser = new Vacancy(name)
      newUser.print = function () {
        console.log(`User: ${this.name}. Vacancy: ${this.type}. Payment: ${this.payment}$`)
      }
      return newUser
    }
  }
  
  const factory = new VacanciesFactory()
  
  const users = [
    factory.create('Andrey', 'developer'),
    factory.create('Aleksandr', 'tester'),
    factory.create('Dmitry', 'designer'),
    factory.create('Ivan', 'developer'),
    factory.create('Petr', 'tester'),
    factory.create('Sergey', 'designer'),
  ]
  
  for (let user of users) {
    user.print()
  }