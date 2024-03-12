const stubs = {};

stubs.cpp = `// Xtend Algo : Code Editor - C++
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}
`;

stubs.python = `# Xtend Algo : Code Editor - python3

import sys
sys.stdin  = open(sys.argv[1])
# keep the above lines to take user input

print("Hello World !!!")`;

export default stubs;
