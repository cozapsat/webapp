import sbt.Keys.libraryDependencies

lazy val root = (project in file("."))
  .settings(
    name := "webapp",
    version := "0.1",
    scalaVersion := "2.12.4",
    libraryDependencies += "com.typesafe.akka" %% "akka-http" % "10.0.10"
  )
  .enablePlugins(SbtWeb)
