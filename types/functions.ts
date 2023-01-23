{
    function getFullName(userEntity: {
        firstName: string;
        secondName: string;
    }): string {
        return `${userEntity.firstName} ${userEntity.secondName}`;
    }

    const getFullNameArrow = (
        firstName: string,
        secondName: string
    ): string => {
        return `${firstName} ${secondName}`;
    };
}
