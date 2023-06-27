const fs = require("fs/promises");

const addToDb = async (data, path) => {
    try {
        const dbData = await fs.readFile(path, "utf8");
        const parsedData = JSON.parse(dbData);
        parsedData.push(data);
        await fs.writeFile(path, JSON.stringify(parsedData));
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

module.exports.addToDb = addToDb;