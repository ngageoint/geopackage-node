## 1.x to 2.x Migration Guide

This will highlight all API changes that were made between 1.x and 2.x for GeoPackage-JS

### GeoPackageAPI methods changed

GeoPackageAPI.openGeoPackage -> GeoPackageAPI.open
GeoPackageAPI.openGeoPackageByteArray -> GeoPackageAPI.open
GeoPackageAPI.createGeoPackage -> GeoPackageAPI.create

### Methods moved from GeoPackageAPI

#### Methods moved to the GeoPackage object

GeoPackageAPI.addTileToGeoPackage -> geopackage.addTile
GeoPackageAPI.createTileTable -> geopackage.createTileTableWithTableName
GeoPackageAPI.getTables -> geopackage.getTables
GeoPackageAPI.getFeatureTables -> geopackage.getFeatureTables
GeoPackageAPI.getTileTables -> geopackage.getTileTables
GeoPackageAPI.hasTileTable -> geopackage.hasTileTable
GeoPackageAPI.hasFeatureTable -> geopackage.hasFeatureTable
GeoPackageAPI.indexGeoPackage -> geopackage.index;
GeoPackageAPI.indexFeatureTable -> geopackage.indexFeatureTable;

### GeoPackageManager has been removed
GeoPackageManager.open -> GeoPackageAPI.open
GeoPackageManager.create -> GeoPackageAPI.create

### Methods with callbacks that also now return Promises

All of the following methods take an optional callback but also return a promise which resolves to the same value that the callback is called with.

GeoPackageAPI.open
GeoPackageAPI.create

### Callbacks that have been moved to Promises

All of the following methods have had their callback parameters removed and they return a promise

GeoPackageConnection constructor
GeoPackageConnection.connect
GeoPackageConnection.connectWithDatabase
sqliteAdapter.createAdapter
GeoPackageConnection.prototype.setApplicationId
TableCreator.prototype.createRequired
GeoPackageValidate.hasMinimumTables

### Methods with Callbacks that now return results
Adapter.prototype.run
GeoPackage.prototype.getApplicationId
GeoPackage.prototype.createFeatureTable
GeoPackage.prototype.createTileTable
GeoPackage.prototype.getSrs
GeoPackage.prototype.getFeatureTables
GeoPackage.prototype.hasFeatureTable
GeoPackage.prototype.getTileTables
GeoPackage.prototype.hasTileTable
GeoPackage.prototype.getTables
GeoPackage.prototype.createTableIndexTable
GeoPackage.prototype.createFeatureTableWithGeometryColumns
GeoPackage.prototype.createFeatureTableWithGeometryColumnsAndDataColumns
GeoPackage.prototype.createTileTableWithTableName
GeoPackageConnection.prototype.getApplicationId
GeoPackageConnection.prototype.get
GeoPackageConnection.prototype.tableExists
GeoPackageConnection.prototype.setApplicationId
GeoPackageConnection.prototype.minOfColumn
GeoPackageConnection.prototype.maxOfColumn
GeoPackageConnection.prototype.each
GeoPackageConnection.prototype.all
GeoPackageConnection.prototype.count
GeoPackageConnection.prototype.insert
GeoPackageConnection.prototype.delete
SqliteAdapter.prototype.get
SqliteAdapter.prototype.all
SqliteAdapter.prototype.each
SqliteAdapter.prototype.insert
SqliteAdapter.prototype.count
SqliteAdapter.prototype.delete
ContentsDao.prototype.getSrs
Dao.prototype.queryForIdObject
Dao.prototype.queryForSameId
Dao.prototype.queryForMultiIdObject
Dao.prototype.queryForAll
Dao.prototype.isTableExists
Dao.prototype.countByEqWithFieldAndValue
Dao.prototype.minOfColumn
Dao.prototype.maxOfColumn
Dao.prototype.create
Dao.prototype.delete
Dao.prototype.deleteById
Dao.prototype.deleteByMultiId
Dao.prototype.deleteWhere
Dao.prototype.deleteAll
Dao.prototype.updateWithValues
Dao.prototype.update
Dao.prototype.createOrUpdate
SpatialReferenceSystemDao.prototype.getBySrsId
SpatialReferenceSystemDao.prototype.createWgs84
SpatialReferenceSystemDao.prototype.createUndefinedCartesian
SpatialReferenceSystemDao.prototype.createUndefinedGeographic
SpatialReferenceSystemDao.prototype.createWebMercator
DataColumnsDao.prototype.getContents
DataColumnConstraintsDao.prototype.queryUnique
GeometryColumnsDao.prototype.getSrs
GeometryColumnsDao.prototype.getContents
GeometryColumnsDao.prototype.getProjection
GeometryColumnsDao.prototype.getFeatureTables
TileDao constructor
TileDao.prototype.initialize
TileDao.prototype.getSrs
TileDao.prototype.queryForTileGridWithZoomLevel
TileDao.prototype.getBoundingBoxWithZoomLevel
TileDao.prototype.deleteTile
TileMatrixSetDao.prototype.getSrs
TileMatrixSetDao.prototype.getProjection
TileMatrixSetDao.prototype.getContents
TileMatrixDao.prototype.getTileMatrixSet
TileMatrixSetDao.prototype.getTileTables
FeatureDao.prototype.getSrs
FeatureTableIndex.prototype.getTableIndex
FeatureTableIndex.prototype.createTableIndex
FeatureTableIndex.prototype.clearGeometryIndicies
FeatureTableIndex.prototype.indexRow
FeatureTableIndex.prototype.updateLastIndexed
FeatureTableIndex.prototype.indexTable
GeometryIndexDao.prototype.getTableIndex
TableCreator.prototype.createUserTable
GeoPackageValidate.hasMinimumTables
UserTableReader.prototype.readTable
TileTableReader.prototype.readTileTable
UserDao.prototype.getCount
BaseExtension.prototype.createExtension
MetadataReferenceDao.prototype.removeMetadataParent
ExtensionDao.prototype.createTable
GeometryIndexDao.prototype.createTable
TableIndexDao.prototype.createTable

### New methods
GeoPackage.prototype.createRequiredTables

### Other changes
GeoPackageConnection.prototype.run now explicitly calls out parameters that may be passed