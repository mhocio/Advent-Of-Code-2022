import sys
import os

def part1(file_name):
    max_calories = 0
    current_calories = 0
    with open(file_name, 'r') as f:
        for line in f:
            if line == "\n":
                max_calories = max(max_calories, current_calories)
                current_calories = 0
            else:
                current_calories += int(line)
        max_calories = max(max_calories, current_calories)
    return max_calories

def part2(file_name):
    curr_calories = 0
    callories_arr = []
    with open(file_name, 'r') as f:
        for line in f:
            if line == "\n":
                callories_arr.append(curr_calories)
                curr_calories = 0
            else:
                curr_calories += int(line)
        callories_arr.append(curr_calories)
    # return sum of 3 highest values from callories_arr
    return sum(sorted(callories_arr)[-3:])

if __name__ == "__main__":
    file_name = "input.txt"
    if len(sys.argv) > 1 and os.path.isfile(sys.argv[1]):
        file_name = sys.argv[1]
    print("Results for file: {}".format(file_name))
    print("Part 1: {}".format(part1(file_name)))
    print("Part 2: {}".format(part2(file_name)))