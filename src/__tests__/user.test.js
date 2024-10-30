import { username, city, image } from "../data/user";

test("username, city, and image are all exported", () => {
  expect(username).toEqual("Masinde");
  expect(city).toEqual("Nairobi, Kenya");
  expect(image).toEqual("https://i.imgur.com/mV8PQxj.gif");
});