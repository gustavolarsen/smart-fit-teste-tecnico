export interface ISmartfitLocation {
  urrent_country_id: number,
  locations: ILocation[],
  wp_total: number,
  total: number,
  success: boolean
}

export interface ILocation {
  id: number,
  title: string,
  content: string,
  opened: boolean,
  mask: string,
  towel: string,
  fountain: string,
  lockerroom: string,
  schedules: ISchedules[]
}

export interface ISchedules {
  weekdays: string,
  hour: string
}