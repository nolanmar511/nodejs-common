import {GoogleAuthOptions, Logger, LoggerConfig, CustomLevelsLogger,
  CustomLevelsLoggerConfig, logger, Operation, paginator, Paginator,
  ParsedArguments, Service, ServiceConfig, ServiceOptions, CreateOptions,
  DeleteCallback, ExistsCallback, GetConfig, GetMetadataCallback,
  InstanceResponseCallback, Interceptor, Metadata, Methods, ServiceObject,
  ServiceObjectConfig, StreamRequestOptions, Abortable, AbortableDuplex,
  ApiError, util} from '@google-cloud/common';

util.makeRequest({url: 'test'}, (err, body, res) => {
  console.log(err);
});

