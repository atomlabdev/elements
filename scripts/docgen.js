import docgen from "react-docgen-typescript";
import { globby } from "globby";
import fs from "node:fs/promises";

const options = {
  savePropValueAsString: true,
  propFilter: (props) =>
    props.parent && props.parent.fileName.startsWith("src/components"),
};

const getSlug = (path) => {
  const splitArr = path.split(".tsx")[0].split("/");

  return splitArr[splitArr.length - 1];
};

const getDisplayName = (str) => {
  return str
    .toLowerCase()
    .replace(/(?:^|[\s-/])\w/g, function (match) {
      return match.toUpperCase();
    })
    .replace("-", " ");
};

async function exists(f) {
  try {
    await fs.promises.stat(f);
    return true;
  } catch {
    return false;
  }
}

const main = async () => {
  const paths = await globby(["./src/components/*"]);
  const templatePaths = await globby(["./src/templates/**/*"]);

  const cwd = process.cwd();

  const p = `${cwd}/dist/registry`;
  const folderExists = await exists(p);

  if (!folderExists) {
    await fs.mkdir(p);
  }

  console.log("templatePaths", templatePaths);

  const templates = await Promise.all(
    templatePaths.map(async (path) => {
      const slug = getSlug(path);

      // const examplePaths = await globby([
      //   `./src/templates/authentication/${slug}.tsx`,
      // ]);

      // console.log("example paths", examplePaths);

      // let examples = [];

      // for (const examplePath of examplePaths) {
      //   console.log("example path", examplePath);
      //   const exampleData = await fs.readFile(examplePath, "utf-8");
      //   const exampleSlug = getSlug(examplePath);
      //   const exampleName = getDisplayName(exampleSlug);

      //   console.log("slug", exampleSlug);
      //   console.log("name", exampleName);

      //   examples.push({
      //     title: exampleName,
      //     slug: exampleSlug,
      //     url: `templates/${slug}/${exampleSlug}`,
      //     code: JSON.stringify(exampleData),
      //   });
      // }

      const code = await fs.readFile(
        `./src/templates/authentication/${slug}.tsx`,
        "utf-8"
      );

      const combined = {
        filename: `${slug}`,
        // description: mainComponent.description,
        // install: JSON.stringify(data),
        url: `templates/authentication/${slug}`,
        code: JSON.stringify(code),
        // components: [...parsed],
      };

      await fs.writeFile(
        `${cwd}/dist/registry/${slug}.json`,
        JSON.stringify(combined)
      );

      return {
        name: slug,
        slug,
      };
    })
  );

  await fs.writeFile(
    `${cwd}/dist/registry/templates.json`,
    JSON.stringify({
      authentication: templates,
    })
  );

  const components = await Promise.all(
    paths.map(async (path) => {
      const parsed = docgen.parse(path, options);

      const slug = getSlug(path);

      const mainComponent = parsed.find((c) => c.description !== "");

      // console.log("mainComponent", path, mainComponent);

      const data = await fs.readFile(path, "utf-8");

      const regexp = RegExp(
        /import(?:(?:(?:[ \n\t]+([^ *\n\t\{\},]+)[ \n\t]*(?:,|[ \n\t]+))?([ \n\t]*\{(?:[ \n\t]*[^ \n\t"'\{\}]+[ \n\t]*,?)+\})?[ \n\t]*)|[ \n\t]*\*[ \n\t]*as[ \n\t]+([^ \n\t\{\}]+)[ \n\t]+)from[ \n\t]*(?:['"])([^'"\n]+)(['"])/g
      );

      const strArr = Array.from(data.matchAll(regexp), (m) => m[0]);

      const imports = strArr.map((str) => {
        // console.log("str", str);

        const dependency = str.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];

        // console.log("dependency", dependency);

        return dependency.replaceAll('"', "").replaceAll("'", "");
      });

      // todo: get internal dependencies
      const filteredImports = imports.reduce(
        (prev, curr, index, arr) => {
          if (
            curr === "react" ||
            curr === "react-native" ||
            curr === "twrnc" ||
            curr.includes("@expo/vector-icons")
          )
            return prev;

          return {
            ...prev,
            external: [...prev.external, curr],
          };
        },
        {
          internal: [],
          external: [],
        }
      );

      const examplePaths = await globby([
        `./src/examples/components/${slug}/*`,
      ]);

      // console.log("example paths", examplePaths);

      // const examples = examplePaths.map(async (examplePath) => {
      //   const exampleData = await fs.readFile(examplePath, "utf-8");

      //   // console.log("exampleData", exampleData);

      //   return exampleData;
      // });

      let examples = [];

      for (const examplePath of examplePaths) {
        const exampleData = await fs.readFile(examplePath, "utf-8");
        const exampleSlug = getSlug(examplePath);
        const exampleName = getDisplayName(exampleSlug);

        console.log("slug", exampleSlug);
        console.log("name", exampleName);

        examples.push({
          title: exampleName,
          slug: exampleSlug,
          url: `components/${slug}/${exampleSlug}`,
          code: JSON.stringify(exampleData),
        });
      }

      console.log("getting displayName", slug);

      const combined = {
        filename: `${slug}.tsx`,
        name: mainComponent.displayName.replace(/([A-Z])/g, " $1").trim(),
        description: mainComponent.description,
        dependencies: filteredImports,
        install: JSON.stringify(data),
        examples: examples,
        // components: [...parsed],
      };

      await fs.writeFile(
        `${cwd}/dist/registry/${slug}.json`,
        JSON.stringify(combined)
      );

      return {
        name: mainComponent.displayName.replace(/([A-Z])/g, " $1").trim(),
        dependencies: filteredImports,
        slug,
      };
    })
  );

  console.log("components", components);

  await fs.writeFile(
    `${cwd}/dist/registry/components.json`,
    JSON.stringify(components)
  );
};

main();
