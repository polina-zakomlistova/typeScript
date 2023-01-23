"use strict";
{
    function getFullName(userEntity) {
        return `${userEntity.firstName} ${userEntity.secondName}`;
    }
    const getFullNameArrow = (firstName, secondName) => {
        return `${firstName} ${secondName}`;
    };
}
