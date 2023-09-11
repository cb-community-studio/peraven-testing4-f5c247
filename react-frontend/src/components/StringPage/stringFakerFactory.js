
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
itemText: faker.animal.crocodilia(),
itemInput: "undefined",
itemIcon: faker.vehicle.bicycle(),
itemImage: faker.image.animals(),
itemAvatar: faker.image.avatar(),
itemChip: faker.internet.httpStatusCode(),
itemTag: faker.color.rgb(),

        };
        data = [...data, fake];
    }
    return data;
};
