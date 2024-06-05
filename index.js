// 1 - masala
//Bo'sh massiv yasang va unga ketma-ket 5 ta element qo'shing.Massivning uzunligi 5 dan katta bo'lguncha elementlarni qo'shishda davom eting.
// let arr = [];
// for (let i = 1; i <= 5; i++) {
//   arr.push(1);
//   console.log(arr);
// }

// 2-masala
// Bo'sh massiv yasang va `push` metodi yordamida unga 3 ta element qo'shing. So'ng, `pop` metodi yordamida oxirgi elementni o'chirib tashlang va qolgan elementlarni birlashtirib string ko'rinishiga o'tkazing.
// let arr = [];
// arr.push(1,2,3);
// arr.pop();
// arr.toString;
// console.log(arr);

// 3-masala
//Bo'sh massiv yasang va `unshift` metodi yordamida unga 4 ta element qo'shing. Keyin, har bir elementni teskari tartibda joylashtiring va natijaviy massivning uzunligini toping.
// let arr = [];
// arr.unshift(1,2,3,4);
// arr.reverse();
// console.log(arr,'uzunlik->',arr.length);

// 4-masala
//Bo'sh massiv yasang va `unshift` metodi yordamida unga 3 ta element qo'shing. So'ng, `shift` metodi yordamida birinchi elementni o'chirib tashlang va qolgan elementlarni vergul bilan ajratilgan string ko'rinishiga o'tkazing.
// let arr = [];
// arr.unshift(1,2,3);
// arr.shift(0);
// arr.join()
// console.log(arr);

// 5-masala
//Berilgan massivdan `pop` metodi yordamida oxirgi elementni o'chiring. So'ng, qolgan elementlarning sonini va birinchi elementning qiymatini aniqlang.
// let arr = [3,true, 4, 'true'];
// arr.pop();
// console.log('uzunluk->',arr.length, 'massiv->', arr, 'qiymat->',arr.at(0));

// 6-masala
//Berilgan massivga `push` metodi yordamida yangi element qo'shing. Massivning oxirgi elementini `at` metodi yordamida olib, string ko'rinishida qaytaring.
// let arr = [1,false,'true',4];
// arr.push('sss');
// arr.toString()
// console.log(typeof arr.at(-1));

// 7-masala
// Berilgan massivga `unshift` metodi yordamida yangi element qo'shing va yangi massivning har bir elementini teskari tartibda joylashtiring. Natijaviy massivning uzunligini toping.
// let arr = [1,2,3,4]
// arr.unshift(11);
// arr.reverse();
// console.log(arr, arr.length);

// 8-masala
//Berilgan massivdan `shift` metodi yordamida birinchi elementni o'chiring va qolgan elementlarning sonini toping. Keyin, qolgan elementlarni `join` metodi yordamida string ko'rinishiga o'tkazing.
// let arr = [1,2,3,4];
// arr.shift(0);
// let str1 = arr.join()
// console.log(str1, arr.length);

// 9-masala
// Berilgan massivga `push` va `unshift` metodlari yordamida 3 ta yangi element qo'shing va natijaviy massivning uzunligini toping. Keyin, massivni teskari tartibda joylashtirib string ko'rinishiga o'tkazing.
// let arr = [1,2,3,4];
// arr.push(9,32);
// arr.unshift(12);
// let uzunlik = arr.length;
// let teskari = arr.reverse();
// let string = arr.join();
// console.log(teskari, string, uzunlik);

// 10-masala
// Berilgan massivdan `pop` va `shift` metodlari yordamida birinchi va oxirgi elementlarni o'chiring. Qolgan elementlarning uzunligini va teskari tartibda joylashtirilgan massivni toping.
// let arr = [1,2,3,4,5,6]
// let str1 = arr.pop();
// let str2 = arr.shift();
// let uzunligi = arr.length;
// let teskari = arr.reverse();
// console.log(teskari, uzunligi);

// 11-masala
// Berilgan massivni `reverse` metodi yordamida teskari tartibda joylashtiring va natijaviy massivni `toString` metodi yordamida string ko'rinishiga o'tkazing. Keyin, string uzunligini toping.
// let arr = [1,2,3,4,5]
// let teskari = arr.reverse();
// let string = arr.toString();
// let uzunligi = string.length;
// console.log(teskari, string , uzunligi);

// 12-masala
// Berilgan ikki massivni `concat` metodi yordamida birlashtiring va yangi massivdan har ikkinchi elementni `slice` metodi yordamida olib, natijaviy massivning uzunligini toping.
//  let arr = [1,2,3,4,5]
//  let arr1 = [6,7,8,9]
//  let qoshildi = arr.concat(arr1);
//  let olindi = qoshildi.slice(1,-1);
//  let uzunligi = qoshildi.length;
//  console.log(qoshildi, uzunligi);

// 13-masala
// Berilgan massivni `splice` metodi yordamida ikkinchi indeksdan boshlab uchta elementni o'chiring va natijaviy massivni `join` metodi yordamida string ko'rinishiga o'tkazing. Keyin, string uzunligini toping.
// let arr =[1,2,3,4,5,6,7,8,9];
// let ochirildi = arr.splice(2 , 3);
// let string = ochirildi.toString();
// let uzunligi = string.length;
// console.log(ochirildi , string , uzunligi);

// 14-masala
// Berilgan massivni `slice` metodi yordamida uchinchi indeksdan boshlab oxirgi indeksgacha kesib oling. So'ng, natijaviy massivni `reverse` metodi yordamida teskari tartibda joylashtirib chiqaring.
// let arr =[1,2,3,4,5,6,7,8,9];
// let kesibOl = arr.slice(3, -1);
// let teskari = kesibOl.reverse();
// console.log(teskari);

// 15-masala
// Berilgan massivni `flat` metodi yordamida bir qatlamga tushiring va natijaviy massivning oxirgi elementini `at` metodi yordamida olib, natijani chiqaring.
// let arr =[1,2,3,4,5,6,7,8,9];
// let flat = arr.flat();
// let oxirgi = flat.at(-1);
// console.log(oxirgi);

// 16-masala
// Berilgan massivdan `at` metodi yordamida uchinchi elementni oling. So'ng, ushbu elementni massivning boshiga `unshift` metodi yordamida qo'shing va natijaviy massivning uzunligini toping.
// let arr =[1,2,3,4,5,6,7,8,9];
// let tanla = arr.at(2);
// let almashtir = arr.unshift(3);
// let uzunligi = arr.length;
// let teskari = arr.reverse()
// console.log(teskari, uzunligi);

// 17-masala
// Berilgan massivni `reverse` metodi yordamida teskari tartibda joylashtiring va natijaviy massivni `join` metodi yordamida string ko'rinishiga o'tkazing. Keyin, stringning oxirgi elementini aniqlang.
// let arr =[1,2,3,4,5,6,7,8,9];
// let teskari = arr.reverse();
// let string = arr.join();
// let oxirgi = string.at(-1);
// console.log(teskari , string , oxirgi);

// 18-masala
// Berilgan massivdan `slice` metodi yordamida birinchi ikkita elementni kesib oling. So'ng, qolgan elementlarni `splice` metodi yordamida to'rtinchi indeksdan boshlab olib tashlang va natijaviy massivni chiqaring.
// let arr =[1,2,3,4,5,6,7,8,9];
// let kesibOl = arr.slice(0,2);
// let olib = arr.splice(4,8);
// console.log(olib);

// 19-misol
// Berilgan massivdan `splice` metodi yordamida uchinchi indeksdan boshlab ikkita elementni kesib oling. Qolgan elementlarni `reverse` metodi yordamida teskari tartibda joylashtirib, natijaviy massivni chiqaring.
// let arr =[1,2,3,4,5,6,7,8,9];
// let kesibOl = arr.splice(0,2);
// let teskari = arr.reverse();
// console.log(teskari);

// 20-masala
// Berilgan massivni `join` metodi yordamida vergul bilan ajratilgan string ko'rinishiga o'tkazing. Keyin, stringni `split` metodi yordamida qayta massivga aylantirib, natijani chiqaring.
// let arr =[1,2,3,4,5,6,7,8,9];
// let join = arr.join();
// let split = join.split()
// console.log(join , split );



