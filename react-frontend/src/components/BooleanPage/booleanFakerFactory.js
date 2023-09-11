
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
boolText: faker.datatype.boolean(),
boolTick: undefined,
boolCheckBox: faker.datatype.boolean(),
boolSwitch: undefined,

        };
        data = [...data, fake];
    }
    return data;
};
