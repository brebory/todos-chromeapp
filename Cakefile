fs = require "fs"
_ = require "lodash"
coffee = require "coffee-script"
path = require "path"

task "clean", "clean build directories", ->
    console.log "Cleaning up..."
    outpath = "#{process.cwd()}/app"
    if fs.statSync(outpath).isDirectory()
      files = fs.readdirSync outpath
      for file in files when not fs.statSync("#{outpath}/#{file}").isDirectory()
        console.log "Cleaning file: #{file}"
        fs.unlinkSync "#{outpath}/#{file}"

task "build", "compile haml and coffescript source to javascript and html", ->
    console.log "Building..."
    srcpath = "#{process.cwd()}/app/src"
    outpath = "#{process.cwd()}/app"
    if fs.statSync(srcpath).isDirectory()
      files = fs.readdirSync srcpath
      for file in files when path.extname(file) is ".coffee"
        console.log "Writing file: #{outpath}/#{file.split('.')[0]}.js"
        compiled = coffee.compile(fs.readFileSync("#{srcpath}/#{file}", "utf-8"))
        fs.writeFileSync("#{outpath}/#{file.split('.')[0]}.js", compiled, "utf-8")
    else
      console.log "Create source directories app/ and app/src/"

task "package", "clean, build, and package the project", ->
    invoke "clean"
    invoke "build"
    console.log "Packaging..."

