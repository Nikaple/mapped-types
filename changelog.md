# Changelog

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org) and [Conventional Commits](https://www.conventionalcommits.org) for commit guidelines.



### [1.0.2](https://github.com/Nikaple/mapped-types/compare/v1.0.1...v1.0.2) (2023-12-26)


### 🐛 Fixes

- export function inheritPropertyDecorators [` efd8360 `](https://github.com/Nikaple/mapped-types/commit/efd8360abbdf4615514ea0861fe2658d4e360fc4).

### [1.0.1](https://github.com/Nikaple/mapped-types/compare/v1.0.0...v1.0.1) (2023-12-26)


### 🐛 Fixes

- add publish config [` aa2474c `](https://github.com/Nikaple/mapped-types/commit/aa2474c218e7529f76fb0efcc6e91a0fb65a8f94).

## 1.0.0 (2023-12-26)


### ✨ Features

- add function overloading [` 433cea2 `](https://github.com/Nikaple/mapped-types/commit/433cea2d1069e43ab71f73321bc28d44626e0bcc).

  Signed-off-by: trycontrolmymind <8202751+trycontrolmymind@users.noreply.github.com>

- add InstersectionType to get more than one args [` 85e5d9f `](https://github.com/Nikaple/mapped-types/commit/85e5d9fa5ebfab639133af4b204cef8031c87ddb).

  Signed-off-by: trycontrolmymind <8202751+trycontrolmymind@users.noreply.github.com>

- add required type, inherit transfomer metadata [` 5281f5d `](https://github.com/Nikaple/mapped-types/commit/5281f5daa3173607e2c2a79b5315c69dfee0bdcd).


- add tests for intersection type [` 0b6799b `](https://github.com/Nikaple/mapped-types/commit/0b6799b7345fb944ca2d3caed7a710df2d2e5d4b).


- export inherit prop initializers [` 95bf291 `](https://github.com/Nikaple/mapped-types/commit/95bf29188355f0043d6faf11106fab063b8300f5).


- inherit property initializers [` 565e256 `](https://github.com/Nikaple/mapped-types/commit/565e2561b94a0908f46011a2881191df4587d91f).


- make compatible with the latest class-transformer [` cf66a5f `](https://github.com/Nikaple/mapped-types/commit/cf66a5fd40d904d24d750a3bd8e534f895defc50).


- remove nest related code [` a746296 `](https://github.com/Nikaple/mapped-types/commit/a746296530b4eede169c482c3c651e9b3f82d0ac).


- support older versions of class-validator [` 9fe4268 `](https://github.com/Nikaple/mapped-types/commit/9fe4268fbbb77afb7613760c5e7d55fd31fa49ea).




### 🐛 Fixes

- add missing common dependency [` ea5cc04 `](https://github.com/Nikaple/mapped-types/commit/ea5cc04b5ed8c910620f9040dd212d26e76b7308).


- add readonly modifier to keys argument (omit, pick) [` c63fb9c `](https://github.com/Nikaple/mapped-types/commit/c63fb9c5b30ddf1e8fee2e725328fb3261e0423a).


- apply is optional decorator for partial types [` 795c244 `](https://github.com/Nikaple/mapped-types/commit/795c24482be6f74e400e48f3729e64d498160037).


- **deps:** update class validator peer dependency to allow latest [` a9609d9 `](https://github.com/Nikaple/mapped-types/commit/a9609d9ca664b947974c4f14eec7f2e6593d4b6e).

  there is a vulnerability affecting all the older versions
  https://nvd.nist.gov/vuln/detail/CVE-2019-18413
  and version 14 now is not listed as peerDependency here, so updating to 14 throw npm error

- incorrect inherit _transformmetadatas [#1212](https://github.com/Nikaple/mapped-types/issues/1212) [` c65d434 `](https://github.com/Nikaple/mapped-types/commit/c65d434c105e30f2fd35159fd7ecbb497f67b194).


- incorrect inherit transform metadata [#1224](https://github.com/Nikaple/mapped-types/issues/1224) [` a94aac8 `](https://github.com/Nikaple/mapped-types/commit/a94aac8b79b8f44280e8c30b1c0d3392fd15bfba).


- incorrect inheritance of optional keys [#1121](https://github.com/Nikaple/mapped-types/issues/1121) [` 0e1db82 `](https://github.com/Nikaple/mapped-types/commit/0e1db827044ed5026d94e0700333abf7070909c6).


- inherit type metadata [` 761e2f1 `](https://github.com/Nikaple/mapped-types/commit/761e2f10bf2474a7e2ba45c4e1a9f52f92f08892).


- intersect more than 4 classes [` e8d2f4a `](https://github.com/Nikaple/mapped-types/commit/e8d2f4abdeb405393e0b73f1f0caced4b51df538).


- remove support for vulnerable class-transformer [` e190dba `](https://github.com/Nikaple/mapped-types/commit/e190dba8274931da2ddf93271452b7849984d2d6).


- remove the function fields from the result type of mapped types [` 56b5d0d `](https://github.com/Nikaple/mapped-types/commit/56b5d0d7501bc3600b7e02491112adf477d776af).


- resolve conflicts [` f6004a1 `](https://github.com/Nikaple/mapped-types/commit/f6004a1a5d8b79485876be6f8a128d7f8ea57ff1).


- revert the required type decorator [` 2bc1518 `](https://github.com/Nikaple/mapped-types/commit/2bc1518c733465b6d65445dcccedccc8e7db02af).


- support the latest version of validator [` 24065be `](https://github.com/Nikaple/mapped-types/commit/24065be0a1f16e6f2977e68a10571b7dec2be649).


- **types:** `RemoveFieldsWithType` when excluding optional fields [` ad2293f `](https://github.com/Nikaple/mapped-types/commit/ad2293fe84ed7d52eb350bd75e4da2b899b93ec3).

  without strict null checks

- Use MappedType<T> as return type for mapped types, fix [#75](https://github.com/Nikaple/mapped-types/issues/75) [` e263875 `](https://github.com/Nikaple/mapped-types/commit/e2638754d15d7975b59b0ecae6ad0fee812faef5).




### 📚 Documentations

- **contributing:** update contribution guide [` 1706971 `](https://github.com/Nikaple/mapped-types/commit/1706971e198422fe96de3fe86439be3805b290c9).


- **license:** added LICENSE [` 84057dc `](https://github.com/Nikaple/mapped-types/commit/84057dcd4ae78129f522c490d83226a2c688c657).


- remove link gitter and added link for discord [` 05a7b6e `](https://github.com/Nikaple/mapped-types/commit/05a7b6e5c571a884eb2be06696b38d773448e889).


- update logo in the readme and update license [` 112a8e8 `](https://github.com/Nikaple/mapped-types/commit/112a8e8830b56ee678623e758fe1ce4e4a164d09).
