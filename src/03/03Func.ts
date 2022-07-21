import {StudentType} from '../02/02';
import {GovernmentBuildingType, HouseType} from '../02/02_02';

const sum = (a: number, b: number) => {
    return a + b;
};
//
// const res: number = sum(2, 3);
// const res2: number = sum(2, 7);
// const res3: number = sum(sum(1, 2), sum(3, 3));
//
export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    });
};

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}


export function doesStudentLiveIn(st: StudentType, citeName: string) {
    return st.address.city.title.toLowerCase() === citeName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
};

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
};

export const toFireStaff = (building: GovernmentBuildingType, staff: number) => {
    building.staffCount -= staff;
};

export const toHireStaff = (building: GovernmentBuildingType, staff: number) => {
    building.staffCount += staff;
};