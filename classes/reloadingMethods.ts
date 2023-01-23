{
	class User {
		skills: string[];

		addSkill(skill: string): void;
		addSkill(skill: string[]): void;
		addSkill(skillOrSkills: string | string[]): void {
			if (typeof skillOrSkills === "string") {
				this.skills.push(skillOrSkills);
			} else if (Array.isArray(skillOrSkills)) {
				this.skills.concat(skillOrSkills);
			} else {
				throw new Error("Попытка добавить не навыки");
			}
		}
	}

	const user = new User().addSkill("devOps");
}
