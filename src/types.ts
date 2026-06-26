export interface Program {
  id: number;
  university: string;
  country: string;
  description: string;
  fullDescription: string;
  ranking: string;
  programsOffered: number;
  avgTuition: string;
  studentPopulation: number;
}

export type RootStackParamList = {
  Home: undefined;
  Details: { program: Program };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
