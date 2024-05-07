export interface IStudent {
    name: string;
    id: string;
    document: string;
    nick: string;
  }
  
  const mockUser: IStudent = {
    name: "Allan",
    id: "1234",
    document: '1234567',
    nick: 'allan.test'
  };
  
  export const getData = (): IStudent => {
    return mockUser;
  };