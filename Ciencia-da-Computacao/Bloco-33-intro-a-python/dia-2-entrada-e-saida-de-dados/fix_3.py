recu_students = []
with open("fix_3.txt") as file:
    for line in file:
        student_line = line
        student_line = student_line.split(" ")
        if int(student_line[1]) < 6:
            recu_students.append(student_line[0] + "\n")

with open("recu_students.txt", mode="w") as recu_file:
    print(recu_students)
    recu_file.writelines(recu_students)
