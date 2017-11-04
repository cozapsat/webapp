resolvers ++= Seq(
  "Typesafe Releases Repository" at "http://repo.typesafe.com/typesafe/releases/",
  "Local Maven Repository" at "file://"+Path.userHome.absolutePath+"/.m2/repository",
  Resolver.sonatypeRepo("public")
)

addSbtPlugin("com.github.ddispaltro" % "sbt-reactjs" % "0.6.8")
addSbtPlugin("com.typesafe.sbt" % "sbt-web" % "1.2.0")
