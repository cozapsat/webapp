resolvers ++= Seq(
  "Typesafe Releases Repository" at "http://repo.typesafe.com/typesafe/releases/",
  "Local Maven Repository" at "file://"+Path.userHome.absolutePath+"/.m2/repository",
  Resolver.sonatypeRepo("public")
)

dependencyOverrides += "org.webjars.npm" % "minimatch" % "3.0.4"
dependencyOverrides += "org.webjars.npm" % "graceful-readlink" % "1.0.1"

addSbtPlugin("com.github.ddispaltro" % "sbt-reactjs" % "0.6.8")
addSbtPlugin("com.typesafe.sbt" % "sbt-web" % "1.2.0")
addSbtPlugin("org.scalastyle" %% "scalastyle-sbt-plugin" % "1.0.0")
addSbtPlugin("io.shaka" % "sbt-npm" % "7")