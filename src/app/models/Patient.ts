export interface Patient {
  id: number;
  name: string;
  address: string
  city: string
  state: string
  zipcode: string
  county: string
  cell_number: string
  email: string
  ethnicity: string
  race: string
  gender: string
  social_security: string
  insurance_patient_id: string
  insurance_group_id: string;
  appointment_time: string
  insured: boolean
  persistent_cough: boolean;
  shortness_of_breath: boolean
  fever: boolean
  sure_exposure: boolean
  suspected_exposure: boolean
  birthday: Date
  form_filled_date: Date;
}
