import { atomWithStorage } from 'jotai/utils';

export const userDataFromLocalStorage: any = atomWithStorage('userData', null);

export const employeeList: any = atomWithStorage('employeList', []);
