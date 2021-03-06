"use strict";

import { default as users } from "./users.js";

/*
 * ----------------------- Task 01
 */
const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));

/*
 * ----------------------- Task 02
 */
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue"));

/*
 * ----------------------- Task 03
 */
const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersWithGender(users, "male"));

/*
 * ----------------------- Task 04
 */
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users));

/*
 * ----------------------- Task 05
 */
const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

/*
 * ----------------------- Task 06
 */
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

/*
 * ----------------------- Task 07
 */
const calculateTotalBalance = users =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users));

/*
 * ----------------------- Task 08
 */
const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

/*
 * ----------------------- Task 09
 */
const getNamesSortedByFriendsCount = users =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));

/*
 * ----------------------- Task 10
 */
const getSortedUniqueSkills = users => {
  const allSkills = users.reduce((acc, user) => {
    acc.push(...user.skills);
    return acc;
  }, []);
  const uniqueSkills = allSkills.filter(function(item, pos) {
    return allSkills.indexOf(item) == pos;
  });
  return uniqueSkills.sort();
};

console.log(getSortedUniqueSkills(users));
