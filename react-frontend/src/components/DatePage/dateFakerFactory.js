
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
dateText: faker.datatype.datetime(),
dateCalender: faker.date.recent(),

        };
        data = [...data, fake];
    }
    return data;
};
