class Student {

    // ── Static variable (shared across ALL objects) ──────────────────────────
    static batchName = "Playwright 2x Batch";
    static totalStudents = 0;

    // ── Constructor (non-static — unique per object) ──────────────────────────
    constructor(id, name, city, score) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.score = score;

        Student.totalStudents++; // increment shared counter each time object is made
    }

    // ── Non-static method (works on THIS specific student's data) ─────────────
    print() {
        console.log(
            `[${this.id}] ${this.name} | City: ${this.city} | Score: ${this.score}%`
        );
    }

    isPassed() {
        return this.score >= 50
            ? `${this.name} → Passed`
            : `${this.name} →  Failed`;
    }

    // ── Static method (belongs to the CLASS, not any single object) ───────────
    static printBatchInfo() {
        console.log(`Batch   : ${Student.batchName}`);
        console.log(`Total   : ${Student.totalStudents} Students\n`);
    }

    static printAll(students) {
        console.log("════════════════════════════════════════");
        console.log(`    ${Student.batchName} — Student List`);
        console.log("════════════════════════════════════════");
        students.forEach(s => s.print());
        console.log("════════════════════════════════════════\n");
    }
}

// ── Create 10 student objects ─────────────────────────────────────────────────
const s1 = new Student(1, "Harsh Singh", "Mumbai", 95);
const s2 = new Student(2, "Ankit Sharma", "Delhi", 88);
const s3 = new Student(3, "Priya Patel", "Ahmedabad", 76);
const s4 = new Student(4, "Riya Mehta", "Pune", 60);
const s5 = new Student(5, "Rahul Verma", "Bangalore", 45);
const s6 = new Student(6, "Sneha Rao", "Hyderabad", 82);
const s7 = new Student(7, "Karan Malhotra", "Chennai", 70);
const s8 = new Student(8, "Neha Gupta", "Kolkata", 55);
const s9 = new Student(9, "Amit Joshi", "Jaipur", 40);
const s10 = new Student(10, "Pooja Nair", "Kochi", 91);

const allStudents = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];

// ── Print using static method ─────────────────────────────────────────────────
Student.printBatchInfo();
Student.printAll(allStudents);

// ── Print pass/fail using non-static method ───────────────────────────────────
console.log("Pass / Fail Report:");
allStudents.forEach(s => console.log(s.isPassed()));