export type User = {
  id: string
  email: string
  fullName: string
  username: string
  givenName: string
  familyName: string
  picture: string
  language: string
  regions: string[]
  currency: string
  createdAt: Date
  updatedAt: Date
}

export type Currency = {
  currency: string
  english_name: string
  native_name: string
  symbol: string
}

export type Region = {
  language: string
  english_name: string
  language_code: string
  countries: Country[]
}

export type Country = {
  name: string
  english_name: string
  code: string
}
