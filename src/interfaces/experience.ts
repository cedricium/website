export type Reference = {
  name: string;
  title: string;
  company: string;
  quote: string;
};

export type Company = {
  name: string;
  url: string;
};

export type Experience = {
  company: Company;
  title: string;
  description: string;
  doe: string;
};
