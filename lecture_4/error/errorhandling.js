function criticalCode() {
    throw "throwing an exception";
}

function logError(theException) {
    console.log(theException);
}

// Try..Catch
console.log("\n*********Try..Catch*********\n");
// xcriticalCode();

try {
    // xcriticalCode();
    criticalCode();
} catch (ex) {
    console.log("Got an Error");
    logError(ex);
}

// Throwing in Try..Catch
console.log("\n*********Throwing in Try..Catch*********\n");

try {
    throw "An exception that is throw every time";
} catch (ex) {
    console.log("Got an Error");
    logError(ex);
}

//Try Catc..Finally
console.log("\n*********Try..Catch..Finally*********\n");
try {

} catch (ex) {
    console.log("Got an Error");
    logError(ex);
} finally {
    console.log("Code that always will run")
}

function hello() {
    console.log("\n***********Throwing Exceptions********");
}