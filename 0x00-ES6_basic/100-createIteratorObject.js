export default function createIteratorObject(report) {
	let departments = Object.values(report);

	let currentDepartmentIndex = 0;
	let currentEmployeeIndex = 0;

	return {
	  [Symbol.iterator]() {
		return this;
	  },
	  next() {
		if (currentDepartmentIndex >= departments.length) {
		  return { done: true };
		}

		const department = departments[currentDepartmentIndex];
		const employees = Object.values(department);

		if (currentEmployeeIndex >= employees.length) {
		  currentDepartmentIndex++;
		  currentEmployeeIndex = 0;
		  return this.next();
		}

		const employee = employees[currentEmployeeIndex];
		currentEmployeeIndex++;

		return { value: employee, done: false };
	  },
	};
}
