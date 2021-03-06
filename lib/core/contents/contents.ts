/**
 * The Contents class models rows in the [`gpkg_contents`](https://www.geopackage.org/spec121/index.html#_contents)
 * table.  The contents table stores identifying and descriptive information
 * that an application can display to a user in a menu of geospatial data
 * available in a GeoPackage.
 * @see https://www.geopackage.org/spec121/index.html#_contents
 */
export class Contents {
  /**
   * the name of the tiles, or feature table
   * @member {string}
   */
  table_name: string;

  /**
   * Type of data stored in the table:. “features” per clause Features,
   * “tiles” per clause Tiles, or an implementer-defined value for other data
   * tables per clause in an Extended GeoPackage.
   * @member {string}
   */
  data_type: string;

  /**
   * A human-readable identifier (e.g. short name) for the table_name content
   * @member {string}
   */
  identifier: string;

  /**
   * A human-readable description for the table_name content
   * @member {string}
   */
  description: string;

  /**
   * timestamp value in ISO 8601 format as defined by the strftime function
   * %Y-%m-%dT%H:%M:%fZ format string applied to the current time
   * @member {Date}
   */
  last_change: string;

  /**
   * Bounding box minimum easting or longitude for all content in table_name
   * @member {Number}
   */
  min_x: number;

  /**
   * Bounding box minimum northing or latitude for all content in table_name
   * @member {Number}
   */
  min_y: number;

  /**
   * Bounding box maximum easting or longitude for all content in table_name
   * @member {Number}
   */
  max_x: number;

  /**
   * Bounding box maximum northing or latitude for all content in table_name
   * @member {Number}
   */
  max_y: number;

  /**
   * Unique identifier for each Spatial Reference System within a GeoPackage
   * @member {SRSRef}
   */
  srs_id: number;

  /**
   * Copy function
   */
  copy(): Contents {
    let contents = new Contents();
    contents.table_name = this.table_name;
    contents.data_type = this.data_type;
    contents.identifier = this.identifier;
    contents.description = this.description;
    contents.min_x = this.min_x;
    contents.max_x = this.max_x;
    contents.min_y = this.min_y;
    contents.max_y = this.max_y;
    contents.srs_id = this.srs_id;
    return contents;
  }

  getTableName(): string {
    return this.table_name;
  }

}
