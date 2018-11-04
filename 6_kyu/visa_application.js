// firstName(string),
// lastName(string),
// criminalRecord(boolean),
// passportExpiration(string) // format dd.mm.yyyy,
// visaType(string) // can be either 'business' or 'tourist'.

// Your job is to filter out all people whose passport expired(passportExpiration property should be at least 90 days from now to be considered valid) and who have a criminal record(criminalRecord should be false).
// Every application(object) that meets the requirements should have two additional properties: visaExpiration(string) and
// insuranceId(number).
// If an applicants visaType is 'business', the visaExpiration should be set to a string in the format dd.mm.yyyy 90 days from now.If, however, the person applied
// for a 'tourist'
// visa the same property should be set to 30 days from now.
// The insuranceId property is calculated as the sum of ASCII values from all characters in firstName and lastName.

// == Passing conidtions
// criminalRecord must be false
// passportExpiration must be at least 90 days from now

// == New properties added 
// visaExpiration(string) // format dd.mm.yyyy // set as 90 days if visaType is business and set as 30 days if tourist
// insuranceId(number) // sum of ASCII values from all chracters in firstName and lastName

// TODO
// filter criminal
// check expiration
// create visaType => set date
// create insuranceId => ASCII

// Util helpers
const R = require('ramda')
const moment = require('moment')

const convertStringToDate = (string) => {
  // format dd.mm.yyyy
  const arr = string.split('.')
  const formatted = `${arr[1]}/${arr[0]}/${arr[2]}`
  return new Date(formatted)
}

const isPast90days = (stringDate, today=new Date()) => {
  const daysDifference = moment(convertStringToDate(stringDate)).diff(today, 'days')
  return daysDifference > 90 ? true : false
}

const visaDaysToAdd = (string) => {
  const visaType = {
    business: 90,
    tourist: 30
  }
  return visaType[string]
}

const getFormattedDate = (date) => {
  let d = date.getDate()
  let dd = d.toString().length > 1 ? d : `0${d}`
  let m = date.getMonth() + 1
  let mm = m.toString().length > 1 ? m : `0${m}`
  let yyyy = date.getFullYear()

  return `${dd}.${mm}.${yyyy}`
}

const addVisaExpiration = (obj, today = new Date()) => {
  const daysToAdd = visaDaysToAdd(obj.visaType)
  const expirationDate = new Date(today.setDate(today.getDate() + daysToAdd))

  const visaExpiration = getFormattedDate(expirationDate)
  return {...obj, visaExpiration }
}

const sumASCII = R.pipe(
  R.map(el => el.charCodeAt(0)),
  R.sum
)

const addInsuranceId = (obj) => {
  let {firstName, lastName} = obj
  let insuranceId = sumASCII(firstName) + sumASCII(lastName)
  return {...obj, insuranceId}
}

// Putting it all together
const validApplicant = R.pipe(
  R.filter(el => !el.criminalRecord),
  R.filter(el => isPast90days(el.passportExpiration)),
  R.map(el => addVisaExpiration(el)),
  R.map(el => addInsuranceId(el))
)

const arr = [{
    firstName: 'howie',
    lastName: 'mann',
    criminalRecord: false,
    passportExpiration: '10.12.2020',
    visaType: 'business'
  },
  {
    firstName: 'john',
    lastName: 'smith',
    criminalRecord: false,
    passportExpiration: '10.12.2021',
    visaType: 'tourist'
  },
  {
    firstName: 'felix',
    lastName: 'mann',
    criminalRecord: true,
    passportExpiration: '10.12.2020',
    visaType: 'tourist'
  },
  {
    firstName: 'cal',
    lastName: 'men',
    criminalRecord: false,
    passportExpiration: '12.01.2019',
    visaType: 'business'
  }
]

const actual = [{
    firstName: 'howie',
    lastName: 'mann',
    criminalRecord: false,
    passportExpiration: '10.12.2020',
    visaType: 'business',
    visaExpiration: 'dd.mm.yyyy',
    insuranceId: 42
  },
  {
    firstName: 'john',
    lastName: 'smith',
    criminalRecord: false,
    passportExpiration: '10.12.2021',
    visaType: 'tourist',
    visaExpiration: 'dd.mm.yyyy',
    insuranceId: 42
  }
]

