import os

def fileClean (filename):
    print('Read file ' + filename);

    inputPath = 'input/' + filename;
    outputPath = 'output/' + filename;

    list = [];

    with open(inputPath, encoding='cp1251', errors='replace') as fp:
        line = fp.readline()
        cnt = 1
        while line:
            if list.count(line) == 0:
                list.append(line);

            line = fp.readline()
            cnt += 1

    print('Write file ' + filename);

    with open(outputPath, 'w', encoding='cp1251', errors='replace') as fp:
        i = 0
        while i < len(list):
            item = list[i]
            i += 1

            fp.write(item)

    pass


for root, dirs, files in os.walk("input") :
    for filename in files:
        fileClean(filename)
