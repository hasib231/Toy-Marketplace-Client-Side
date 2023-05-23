import React from "react";

const Blog = () => {
  return (
    <div>
      <div className=" text-center py-2">
        <h1 className="text-5xl ">Blog</h1>
      </div>
      <div className="my-card rounded-lg">
        <div className=" p-5 rounded my-5">
          <div className="py-3">
            <h3 className="font-bold">
              1. What is an access token and refresh token? How do they work and
              where should we store them on the client-side?.
            </h3>
            <p>
              An access token is a short-lived token that grants access to a
              protected resource, such as an API. A refresh token is a
              long-lived token that can be used to obtain new access tokens when
              the current one expires. They work together to enable a secure and
              convenient way of accessing resources on behalf of a user. Access
              tokens and refresh tokens are issued by an authorization server
              that implements OAuth 2.0 or OpenID Connect protocols. The client
              application requests these tokens from the authorization server
              after authenticating the user and obtaining their consent. The
              client then uses the access token to make API calls to the
              resource server. When the access token expires, the client can use
              the refresh token to request a new access token without asking the
              user to log in again. The best practice for storing these tokens
              on the client-side depends on the type of client application and
              the level of security required. Generally, access tokens should be
              stored in memory and refresh tokens should be stored securely
              using encryption and other mechanisms. For example, web
              applications can store access tokens in session storage and
              refresh tokens in HTTP-only cookies. Mobile applications can store
              access tokens in memory and refresh tokens in secure storage such
              as Keychain or Keystore
            </p>
          </div>
          <div className="py-3">
            <h3 className="font-bold">2. Compare SQL and NoSQL databases?</h3>
            <p>
              SQL and NoSQL databases are two types of databases that differ in
              their structure, scalability, language, and use cases. Here are
              some of the main differences between them: Structure: SQL
              databases are relational, meaning they store data in tables with
              rows and columns that are linked by foreign keys. NoSQL databases
              are non-relational, meaning they store data in various formats
              such as documents, key-value pairs, graphs, or columns.
              Scalability: SQL databases are vertically scalable, meaning they
              can handle more load by increasing the resources of a single
              server. NoSQL databases are horizontally scalable, meaning they
              can handle more load by adding more servers to a cluster.
              Language: SQL databases use Structured Query Language (SQL) to
              query and manipulate data. NoSQL databases use different query
              languages or APIs depending on the type of database. Some NoSQL
              databases do not have a query language at all. Data type: SQL
              databases are best suited for structured data that has
              well-defined relationships and schemas. NoSQL databases are best
              suited for unstructured or semi-structured data that has dynamic
              schemas and does not fit into a tabular format. Use cases: SQL
              databases are ideal for applications that require complex queries,
              transactions, consistency, and reliability. NoSQL databases are
              ideal for applications that require flexibility, scalability,
              performance, and handling of large volumes of diverse data.
            </p>
          </div>
          <div className="py-3">
            <h3 className="font-bold">
              3.What is express js? What is Nest JS?.
            </h3>
            <p>
              Express.js and Nest.js are two popular Node.js frameworks for
              building web applications. Here are some of the main differences
              between them: Express.js is a fast, unopinionated, minimalist web
              framework that provides a thin layer of fundamental web
              application features, such as routing, middleware, and HTTP
              helpers. It does not force you to use any specific ORM or template
              engine and gives you true flexibility by allowing use of any other
              libraries. Nest.js is a progressive web framework that provides a
              robust set of features for building efficient, reliable and
              scalable server-side applications. It uses modern JavaScript, is
              built with TypeScript and combines elements of OOP, FP, and FRP.
              It also leverages the power of Express.js as the default HTTP
              server framework, but can be configured to use Fastify as well.
              Express.js is more suitable for simple and lightweight
              applications that do not require complex architecture or logic. It
              is also more mature and widely used than Nest.js, which means it
              has more community support and third-party modules available.
              Nest.js is more suitable for complex and enterprise-level
              applications that require a well-defined structure, modularity,
              testability, and scalability. It is also more aligned with the
              Angular ecosystem and supports features such as dependency
              injection, pipes, guards, interceptors, and decorators.
            </p>
          </div>
          <div className="py-3">
            <h3 className="font-bold">
              4. What is MongoDB aggregate and how does it work?
            </h3>
            <p>
              MongoDB aggregate is a command or a method that performs
              aggregation operations on a collection or a view using the
              aggregation pipeline. The aggregation pipeline is a sequence of
              stages that process and transform the documents as they pass
              through the pipeline. MongoDB aggregate works by taking one or
              more documents as input and applying one or more stages to them.
              Each stage performs a specific operation on the input documents,
              such as filtering, grouping, projecting, sorting, or calculating
              values. The output documents of each stage are passed to the next
              stage until the final result is produced. MongoDB aggregate can
              be used to perform various tasks, such as: Grouping values from
              multiple documents together and performing operations on the
              grouped data to return a single result. Analyzing data changes
              over time or across different categories. Joining documents from
              multiple collections using the lookup . Writing the output
              documents to a new collection or replacing an existing collection
              using the out stage. Updating documents with an aggregation
              pipeline using the merge stage. MongoDB aggregate can be run as a
              database command or as a helper method in mongosh or other
              drivers. The helper method is more convenient and returns a cursor
              object that can be iterated over. The database command returns the
              full result set in a single document and requires specifying a
              cursor option.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
