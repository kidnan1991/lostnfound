**<span class="underline">User Guide</span>**

GridDB Grafana plugin

**<span class="underline">Contents</span>**

[Introduction](#introduction)

[Install GridDB Plugin](#install-griddb-plugin)

[How to use](#usage-example)

[Environments](#environments)

[GridDB server setup](#griddb-server-setup)

[GridDB server data](#griddb-server-data)

[Adding the data source](#adding-the-data-source)

[Create variable](#create-variable)

[Create annotation](#create-annotation)

[Create query to draw Graph](#create-query-to-draw-graph)

[Appendix](#appendix)

[Query special expression](#query-special-expression)

# Introduction

Grafana GridDB Datasource Plugin will be used to get data from GridDB database and display as graph or table base on Grafana platform.

# Install GridDB Plugin

**How to build**

Go to source include file package.json and run command below:

yarn install

yarn build

**How to installation**

1\. Go to $GRAFANA\_HOME/data/plugins, create new folder ‘GridDB-plugin’

2\. Build GridDB plugin source code, copy folder ‘dist’ to folder ‘GridDB-plugin’

3\. Restart your Grafana server

# How to use

## Environments
### GridDB server setup

+ OS: CentOS 7.4

+ URL: <http://localhost:8080/gs_admin/>

+ Cluster: recaius

+ User: admin

+ Password: admin

![](media/image2.png)

<span id="_Toc535842069" class="anchor"></span>Figure 1 GridDB gs\_admin Login screen

### GridDB server data

> Databases:

+ Public: 6 tables

+ Private: 0 table

+ Test\_performance: 26 tables

![](media/image3.png)

<span id="_Toc535842070" class="anchor"></span>Figure 2 Database tree in GridDB server screen

> Time series container

![](media/image4.png)

<span id="_Toc535842071" class="anchor"></span>Figure 3 Container one\_thousand\_rows schema screen

![](media/image5.png)

<span id="_Toc535842072" class="anchor"></span>Figure 4 Container one\_thousand\_rows data screen

> Collection container 

Note: This collection container has multiple time columns:

![](media/image6.png)

<span id="_Toc535842073" class="anchor"></span>Figure 5 Container Multiple\_Time\_Columns schema

![](media/image7.png)

<span id="_Toc535842074" class="anchor"></span>Figure 6 Container Mutliple\_Time\_Columns data

## Adding the data source

**Step 1**: Open the side menu by clicking the Grafana icon in the top header.

**Step 2**: In the side menu under the **Configuration** link you should find a link named **Data Sources**

**Step 3**: Click the **+ Add data source** button in the top header

**Step 4**: Select **GridDB** from the Type dropdown

**Step 5**: Click to **Save & Test** button to check connection to datasource. System use basic authentication to authenticate to GridDB server

Setup datasource connect to GridDB below:

![](media/image8.png)

<span id="_Toc535842075" class="anchor"></span>Figure 7 Setting datasource connect to GridDB server

Note: Check appendix about $\_minInterval for Min time interval input.

Check connection to GridDB server

![](media/image9.png)

<span id="_Toc535842076" class="anchor"></span>Figure 8 Datasource when connect to GridDB server successfully

## Create variable

**Step 1**: Open any panel and click to **Settings** button on the top screen.

**Step 2**: In the side menu under the **Settings** you should find a link named **Variables**

**Step 3**: Click the **+ Add variable** button in the center screen.

**Step 4**: Input data for variable screen below:

![](media/image10.png)

<span id="_Toc535842077" class="anchor"></span>Figure 9 Variable setting to get all columns of specific container

**Step 5**: Focus to other field to show preview data of variable

![](media/image11.png)

<span id="_Toc535842078" class="anchor"></span>Figure 10 Preview value of variable

> User may be use one of three formats below to create variable:

1. To get all containers

        $griddb_container_list

2. To get all columns of a specific container

        $griddb_column_list({container name})

3. To get data of a specific container

        $griddb_query_data({container name}, {columns}, {TQL})

**Step 6**. Click **Add** and **Save** button to save new a variable. Do the same to create the remaining 2 variables (variable **Container** get all containers and variable **Query** to get data from table one\_thousand\_rows)

After creating variable successfully, variable will be displayed on the query data screen

![](media/image12.png)

<span id="_Toc535842079" class="anchor"></span>Figure 11 All variables display on query data screen

![](media/image13.png)

<span id="_Toc535842080" class="anchor"></span>Figure 12 Options for the specific variables

Variable automatic added in to container list box

![](media/image14.png)

<span id="_Toc535842081" class="anchor"></span>Figure 13 Variables is displayed on container list select box

**Step 7**: Use variable in Select box mode

Choose **$container** from container select box

![](media/image15.png)

<span id="_Toc535842082" class="anchor"></span>Figure 14 Use variable from Container select box

**Select container “one\_thousand\_rows” from $container**. Grafana will be auto replace $container by selected container

![](media/image16.png)

<span id="_Toc535842083" class="anchor"></span>Figure 15 Select container “one\_thousand\_rows”

![](media/image17.png)

<span id="_Toc535842084" class="anchor"></span>Figure 16 When the variable is changed, query auto executed with selected container

## Create annotation

**Step 1**: Open any panel and click to **Settings** button on the top screen.

**Step 2**: In the side menu under the **Settings** you should find a link named **Annotations**

**Step 3**: Click the **+ Add Annotation Query** button in the center screen.

**Step 4**: Input data below to create **normal annotation**

![](media/image18.png)

<span id="_Toc535842085" class="anchor"></span>Figure 17 Create normal annotation

Note: We need to add “where $\_timeFilter” clause to limit the data inside the dash board time range.

Check appendix for more information about $\_timeFilter.

**Step 5**: Click **Add** and **Save** to add new annotation. After that, back to query data screen to check annotation

![](media/image19.png)

<span id="_Toc535842086" class="anchor"></span>Figure 18 Normal annotation on query data screen

Annotation name will be display on top of query data screen. Result of annotation display on graph

Hover to annotation line to display information of annotation on tooltip

![](media/image20.png)

<span id="_Toc535842087" class="anchor"></span>Figure 19 Tooltip of annotation

Tooltip display value tag and text of annotation **Anno\_1**

**Step 6**: Input data below to create **regions annotation**

![](media/image21.png)

<span id="_Toc535842088" class="anchor"></span>Figure 20 Create regions annotation

Regions annotation will be support for container has multiple time columns

Note: We need to add “where $\_rangeFilter” to limit the data inside the dash board time range.

Check appendix for more information about $\_rangeFilter.

**Step 7**: Click **Add** and **Save** to create new regions annotation. After that, back to query data screen to check annotation

![](media/image22.png)

<span id="_Toc535842089" class="anchor"></span>Figure 21 Regions annotation display on query data screen

Annotation name will be display on top of query data screen. Result of annotation display on graph

Hover to annotation line to display information of annotation on tooltip

![](media/image23.png)

<span id="_Toc535842090" class="anchor"></span>Figure 22 Tooltip of regions annotation

| **Item** | **Description**                    |
| -------- | ---------------------------------- |
| 1        | Region annotation                  |
| 2        | This is the dash board time range. |

## Create query to draw Graph

> Pre-condition:

  - Were created in section 2.
    
    ![](media/image24.png)

<span id="_Toc535595252" class="anchor"></span>Figure 23: Variable list

<table>
<thead>
<tr class="header">
<th><strong>Item</strong></th>
<th><strong>Description</strong></th>
<th><strong>Variable meaning</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td><p>Variable name: Container</p>
<p>Selected option: one_thousand_rows</p></td>
<td>Get container list in GridDB database</td>
</tr>
<tr class="even">
<td>2</td>
<td><p>Variable name: Column</p>
<p>Selected option: column1</p></td>
<td>Get column list in one_thousand_rows container</td>
</tr>
<tr class="odd">
<td>3</td>
<td><p>Variable name: Query</p>
<p>Selected option: 13</p></td>
<td>Get all value of column1 in one_thousand_rows container</td>
</tr>
</tbody>
</table>

> Select time range in UI. In actually, Grafana just display respond data which has time in selected time range so GridDB plugin auto add selected time range into TQL query to limit respond data. So graph just display when user select appropriated time range.
    
![](media/image25.png)

<span id="_Toc535595253" class="anchor"></span>Figure 24: Select time range

![](media/image26.png)

<span id="_Ref533414367" class="anchor"></span>Figure 25: Input time range

<table>
<thead>
<tr class="header">
<th><strong>Item</strong></th>
<th><strong>Description &amp; Meaning</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td>Grafana will provide some Quick ranges for user. In this case we chose Last 90 days.</td>
</tr>
<tr class="even">
<td>2</td>
<td><p>After selected Last 90 days, the value will auto change to:</p>
<p>From: now-90d</p>
<p>To: now.</p>
<p>User also input specify time as Figure 25: Input time range after that click Apply button</p></td>
</tr>
</tbody>
</table>

Step by step to create query in Select Box mode:

**Step 1**: Select container, time column and list column to view data

> Before:

![](media/image27.png)

<span id="_Toc535595255" class="anchor"></span>Figure 26: Default GUI when create new query

“Choose container”, “Time column”, “View column” are default values.

> After:

![](media/image28.png)

<span id="_Toc535595256" class="anchor"></span>Figure 27: List containers are displayed on container dropdown

![](media/image29.png)

<span id="_Toc535595257" class="anchor"></span>Figure 28: List columns of container are displayed on view dropdown

<table>
<thead>
<tr class="header">
<th><strong>Item</strong></th>
<th><strong>Description &amp; Meaning</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td><p>List of all variable name and container name.</p>
<ul>
<li><p>In this case we have 3 variables which have defined in pre-condition: All variable will be add ‘$’ at start: $Container, $Column, $Query. Although dropdown display all variable but just variable which select container list have meaning in this field.</p></li>
<li><p>After list variables will be list container name.</p></li>
</ul>
<p>In this example we select ‘$Container’</p></td>
</tr>
<tr class="even">
<td>2</td>
<td><p>List of column which have type ‘TIMESTAMP’ in selected container.</p>
<p>In this case selected option of $Container is ‘one_thousand_rows’ so it will display all time column in ‘one_thousand_rows’ container. We select ‘time’</p></td>
</tr>
<tr class="odd">
<td>3</td>
<td><p>List of all numeric column in selected container.</p>
<p>In this case is all numeric column in ‘one_thousand_rows’ container. We select ‘column1’ and ‘column2’</p></td>
</tr>
</tbody>
</table>

After select ‘Choose container’, ‘Time column’, ‘View column’ we have query panel as below picture.

![](media/image30.png)

<span id="_Toc535595258" class="anchor"></span>Figure 29: Choose container, time column and view column for query

**Step 2**: Create condition

> Before:

![](media/image31.png)

<span id="_Toc535595259" class="anchor"></span>Figure 30: No condition in default

Do not have any specified condition in “CONDITION”

> After:

Click to Plus button to add condition. Item 1 in below picture is list in all suggest column in ‘one\_thousand\_rows’ container. We select ‘column4’ option

![](media/image32.png)

<span id="_Toc535595260" class="anchor"></span>Figure 31: List columns of container is suggested for condition

Item 2 in below picture is list of all supported operator. We select ‘\>=’ operator.

![](media/image33.png)

<span id="_Toc535595261" class="anchor"></span>Figure 32: List operators are displayed in compare dropdown

Item 3 in below picture is input field. We input ‘400’

![](media/image34.png)

<span id="_Toc535595262" class="anchor"></span>Figure 33: Use enter value by manual for condition clause

To add more condition, click Plus button. In item in below picture, we can input by manual variable name or column name. In this example, we select ‘time’ column in dropdown as a key and input ‘$\_\_timeFrom’ as a value.

![](media/image35.png)

<span id="_Toc535595263" class="anchor"></span>Figure 34: User may be add more condition clause

Do same as previous step, we have all condition as item 5 in below picture.

![](media/image36.png)

<span id="_Toc535595264" class="anchor"></span>Figure 35: Step 2-6

After that we will have Graph as below picture

![](media/image37.png)

<span id="_Ref533432092" class="anchor"></span>Figure 36: Step 2-7

Item 6: The Graph were draw by Grafana base on respond data. In this panel we have 2 graph, one green, one yellow

Item 7: Graph legend

Line green: ‘one\_thousand\_rows.column1’ display data for column1

Line yellow: ‘one\_thousand\_rows.column2’ display data for column2

Grafana also support user to see the real query which were sent to server. Let take a look:

![](media/image38.png)

<span id="_Toc535595266" class="anchor"></span>Figure 37: Step 2-8

<table>
<thead>
<tr class="header">
<th><strong>Item 8</strong></th>
<th><strong>Explanation</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>SELECT * FROM one_thousand_rows</td>
<td>$Container = one_thousand_rows</td>
</tr>
<tr class="even">
<td>WHERE column4 &gt;= 400 AND</td>
<td></td>
</tr>
<tr class="odd">
<td>"time" &gt;= TIMESTAMP('2018-11-15T02:55:03.871Z') AND</td>
<td>$__timeFrom = TIMESTAMP('2018-11-15T02:55:03.871Z')</td>
</tr>
<tr class="even">
<td>"time" &lt;= TIMESTAMP('2018-11-15T02:56:00.899Z') AND</td>
<td>$__timeFrom = TIMESTAMP('2018-11-15T02:56:00.899Z')</td>
</tr>
<tr class="odd">
<td>column1 &gt;= 13 AND</td>
<td><p>$Column = column1</p>
<p>$Query = 13</p></td>
</tr>
<tr class="even">
<td>(time &gt; TIMESTAMP('2018-11-15T02:55:03.871Z') AND time &lt; TIMESTAMP('2018-11-15T02:56:00.899Z'))</td>
<td>this item add into end of TQL query by automatically base on selected time range</td>
</tr>
<tr class="odd">
<td>LIMIT 10000</td>
<td>LIMIT = 10000</td>
</tr>
<tr class="even">
<td>OFFSET 0</td>
<td>OFFSET = 0</td>
</tr>
</tbody>
</table>

Note: Check appendix for more information about “$” special expression.

From Figure 36, User also limit respond records by specify value for Limit and change name for graph by define Alias

.

![](media/image39.png)

<span id="_Toc535595267" class="anchor"></span>Figure 38: Step 2-9

Item 11: update limit to 2

Item 12: update ALIAS BY to ‘$\_col’

After update item 11, 12, then we have item 9, 10 will be changed as above picture

Item9: both of graph green and yellow just have 2 points data

Item 10: Legend change to ‘column1’ for green line and ‘column2’ for yellow line

From Figure 36, User also change to TIME\_SAMPLING by click to checkbox:

![](media/image40.png)

<span id="_Toc535595268" class="anchor"></span>Figure 39: Step 2-10

After click check box in item 14

The Graph will be changed as item 13

From Figure 36, User can change to Manual Input Mode by click into menu button after that select ‘Toggle Edit Mode’ as below picture

![](media/image41.png)

<span id="_Toc535595269" class="anchor"></span>Figure 40: Step 2-11

After that we will have Manual Input Mode as below picture

![](media/image42.png)

<span id="_Toc535595270" class="anchor"></span>Figure 41: Step 2-12

Item 16: GridDB Plugin will auto render from Select Box Mode

Item 17: we update ALIAS BY into ‘$\_\_container’

After that we will have Graph as below picture

![](media/image43.png)

<span id="_Toc535595271" class="anchor"></span>Figure 42: Step 2-13

Item 18: we will have 5 graphs

Item 19: Legend will be changed, name for all line graph in item 18 will be same is ‘one\_thousand\_rows’

We will look into real query send to server

![](media/image44.png)

<span id="_Toc535595272" class="anchor"></span>Figure 43: Step 2-14

<table>
<thead>
<tr class="header">
<th><strong>Item 20</strong></th>
<th><strong>Explanation</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>$__timeSampling(*, $__interval)</td>
<td><p>Replace with:</p>
<p>TIME_SAMPLING(*, TIMESTAMP('2018-11-15T02:55:01.312Z'), TIMESTAMP('2018-11-15T02:56:39.229Z'), 1000, MILLISECOND)</p></td>
</tr>
</tbody>
</table>

Note: Check appendix for more information about “$” special expression.

# Appendix

## Query special expression

The following expression can be used in query input to create dynamic query.

<table>
<thead>
<tr class="header">
<th><strong>Name</strong></th>
<th><strong>Remark</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Special variables: The follow syntax will be replace by a special value define by GridDB Plugin.</td>
<td></td>
</tr>
<tr class="even">
<td>$__timeFrom</td>
<td><p>The start of the current time range of Dash board.</p>
<p>Replace with below:</p>
<p>TIMESTAMP({Dash board start time})</p>
<p><em>*Note: The current time range is in the top right corner of the dash board.</em></p></td>
</tr>
<tr class="odd">
<td>$__timeTo</td>
<td><p>The end of the current time range of Dash board.</p>
<p>Replace with below:</p>
<p>TIMESTAMP({Dash board end time})</p>
<p><em>*Note: The current time range is in the top right corner of the dash board.</em></p></td>
</tr>
<tr class="even">
<td>$__col</td>
<td>Use in Alias patterns. It will be replaced with the specified column name</td>
</tr>
<tr class="odd">
<td>$__container</td>
<td>Use in Alias patterns. It will be replaced with the specified container name</td>
</tr>
<tr class="even">
<td>$__interval</td>
<td><p>This variable only used in $__timeSampling macro.</p>
<p>Value of this variable will scale with the dash board time range.</p>
<p>Example:</p>
<p>when the dashboard show data in 1 year, $__interval = 1 day</p>
<p>when the dashboard show data in 1 day, $__interval = 1 minute</p>
<p>Lower limit of this variable is specified by $__minInterval variable.</p>
<p>When use in query it will be replace with Grafana time interval notion.</p>
<p><em>*Note: Grafana interval time is a special auto option that will change depending on the current time range in the top right corner of the dash board.</em></p></td>
</tr>
<tr class="odd">
<td>$__minInterval</td>
<td>Lower limit of $__interval variable. Defined in Create Data Source screen.</td>
</tr>
<tr class="even">
<td>Variables: The follow syntax will be replace by value of a custom variable define by user.</td>
<td></td>
</tr>
<tr class="odd">
<td>${variable name}</td>
<td>Replace with current variable value.</td>
</tr>
<tr class="even">
<td>Macro: The follow syntax will be replace by a TQL expression.</td>
<td></td>
</tr>
<tr class="odd">
<td>$__timeFilter</td>
<td><p>Use to limit data.</p>
<p>Replace with below condition:</p>
<p>{time column} &gt; $__timeFrom AND {time column} &lt; $__timeTo</p></td>
</tr>
<tr class="even">
<td>$__rangeFilter</td>
<td><p>Use to limit regions annotation data.</p>
<p>Only use in regions annotation. Replace with below condition:</p>
<p>({start time column} &gt; $__timeFrom AND {start time column} &lt; $__timeTo) OR</p>
<p>({end time column} &gt; $__timeFrom AND {end time column} &lt; $__timeTo)</p></td>
</tr>
<tr class="odd">
<td>$__timeSampling({column name}, {time interval})</td>
<td><p>Replace with below expression:</p>
<p>TIME_SAMPLING ({column name}, $__timeFrom, $__timeTo, {time interval value}, {time interval unit})</p>
<p>The input {time interval} follow Grafana time interval notion:</p></td>
</tr>
</tbody>
</table>

Below show the possible usage of special expression in query input scenario.

<table>
<thead>
<tr class="header">
<th>Expression</th>
<th>Query data</th>
<th>Query data - alias</th>
<th>Query annotation data</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>$__timeFilter</td>
<td>-</td>
<td>-</td>
<td>x *</td>
</tr>
<tr class="even">
<td>$__rangeFilter</td>
<td>-</td>
<td>-</td>
<td>x **</td>
</tr>
<tr class="odd">
<td>$__timeSampling({column name}, {time interval})</td>
<td>x</td>
<td>-</td>
<td>x</td>
</tr>
<tr class="even">
<td>$__interval</td>
<td>x</td>
<td>-</td>
<td>x</td>
</tr>
<tr class="odd">
<td>$__minInterval</td>
<td>x</td>
<td>-</td>
<td>x</td>
</tr>
<tr class="even">
<td>$__timeFrom</td>
<td>x</td>
<td>-</td>
<td>x</td>
</tr>
<tr class="odd">
<td>$__timeTo</td>
<td>x</td>
<td>-</td>
<td>x</td>
</tr>
<tr class="even">
<td>$__col</td>
<td>-</td>
<td>x</td>
<td>-</td>
</tr>
<tr class="odd">
<td>$__container</td>
<td>-</td>
<td>x</td>
<td>-</td>
</tr>
<tr class="even">
<td><p>Variables are created by user:</p>
<p>/^${variable name}$/</p></td>
<td>x</td>
<td>-</td>
<td>-</td>
</tr>
<tr class="odd">
<td><p>Note:</p>
<p>* Use in case query single annotation. Should always use this expression to limit data.</p>
<p>** Use in case query range annotation. Should always use this expression to limit data.</p></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
