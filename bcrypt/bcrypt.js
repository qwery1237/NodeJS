import bcrypt from 'bcrypt';

const password = 'abcd1234';

const hashed = bcrypt.hashSync(password, 10); // 10 is salt length recommended = 8~12
console.log(`password: ${password}, hashed: ${hashed}`);

const result = bcrypt.compareSync('abcd1234', hashed);
console.log(result);
