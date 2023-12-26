## Description

This is a fork of `mapped-types` from [Nest.js](https://github.com/nestjs/nest), but generalized to be used in other projects.

## Installation

```bash
$ npm i --save @nikaple/mapped-types
```

## Quick Start

As you build out features, it's often useful to construct variants on a base entity type. A good example of such a variant is a **Data Transfer Object** (DTO). A Data Transfer Object is an object that is used to encapsulate data, and send it from one part of your application to another. DTO’s help us define the input and output interfaces of our system.

Let's imagine a real-world example, where we typically need to build both a **create** and **update** variations for the same entity type.

The create variant may require all fields, while the update variant may make all fields **optional**. Not to mention, both these types can also be variants of an entity type (to some extent).

That's a lot of redundant code!

Thus, this project now provides several utility functions that perform type transformations to help us avoid doing this, and make life a little bit easier.

Available mapped types:

- `PartialType` - returns a type (class) with all the properties of the input type set to optional (requirement: at least 1 validation decorator applied to each property)
- `PickType` - constructs a new type (class) by picking a set of properties from an input type
- `OmitType` - constructs a type by picking all properties from an input type and then removing a particular set of keys
- `IntersectionType` - combines two types into one new type (class)

Read more in [this article](https://trilon.io/blog/introducing-mapped-types-for-nestjs).
