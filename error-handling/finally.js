function openAndWriteToFile(file, data) {
    try {
      openMyFile(file);
      try {
        // tie up a resource
        writeMyFile(data);
      } finally {
        closeMyFile(); // always close the resource
      }
    } catch {
      console.error('opening of file failed');
    }
}